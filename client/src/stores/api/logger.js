import { ref, inject } from 'vue';
import { defineStore } from 'pinia';
import { useErrorStore } from '@/stores/apperror';

export const useLogger = defineStore('logger', () => {
  const helpdesk = inject('helpdesk');
  const error = useErrorStore();

  const record = ref({});

  const records = ref({});

  function $init() {
    return {};
  }

  async function findAll(query) {
    try {
      records.value = await helpdesk.emit('logger:find:all', { ...query });
    } catch (err) {
      error.setError(err);
    }
  }

  async function findOne({ id }) {
    try {
      record.value = await helpdesk.emit('logger:find:one', { id });
    } catch (err) {
      error.setError(err);
    }
  }

  async function createOne(payload) {
    try {
      return await helpdesk.emit('logger:create:one', { ...payload });
    } catch (err) {
      error.setError(err);
    }
  }

  async function updateOne({ id, payload }) {
    try {
      return await helpdesk.emit('logger:update:one', { id, ...payload });
    } catch (err) {
      error.setError(err);
    }
  }

  async function removeOne({ id }) {
    try {
      return await helpdesk.emit('logger:remove:one', { id });
    } catch (err) {
      error.setError(err);
    }
  }

  return { record, records, $init, findAll, findOne, createOne, updateOne, removeOne };
});
