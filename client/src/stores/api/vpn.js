import { ref, inject } from 'vue';
import { defineStore } from 'pinia';
import { useError } from '@/stores/error';

export const useVPNAddress = defineStore('vpn', () => {
  const helpdesk = inject('helpdesk');
  const error = useError();

  function $reset() {
    return {
      id: null,
      vpn: null,
      ipaddress: null,
      login: null,
      unit: null,
      location: null,
      company: null,
      branch: null,
      enterprise: null,
      department: null,
      position: null,
      fullname: null,
      phone: null,
      mail: null,
      dateOpen: null,
      dateClose: null,
      service: null,
      comment: null
    };
  }

  async function findAll(query) {
    try {
      return await helpdesk.emit('vpn:find:all', { ...query });
    } catch (err) {
      error.setError(err);
    }
  }

  async function findOne({ id, populate = false }) {
    try {
      return await helpdesk.emit('vpn:find:one', { id, populate });
    } catch (err) {
      error.setError(err);
    }
  }

  async function createOne({
    vpn,
    ipaddress,
    login,
    unit,
    location,
    company,
    branch,
    enterprise,
    department,
    position,
    fullname,
    phone,
    mail,
    dateOpen,
    dateClose,
    service,
    comment
  }) {
    try {
      return await helpdesk.emit('vpn:create:one', {
        vpn,
        ipaddress,
        login,
        unit,
        location,
        company,
        branch,
        enterprise,
        department,
        position,
        fullname,
        phone,
        mail,
        dateOpen,
        dateClose,
        service,
        comment
      });
    } catch (err) {
      error.setError(err);
    }
  }

  async function updateOne({
    id,
    vpn,
    ipaddress,
    login,
    unit,
    location,
    company,
    branch,
    enterprise,
    department,
    position,
    fullname,
    phone,
    mail,
    dateOpen,
    dateClose,
    service,
    comment
  }) {
    try {
      return await helpdesk.emit('vpn:update:one', {
        id,
        vpn,
        ipaddress,
        login,
        unit,
        location,
        company,
        branch,
        enterprise,
        department,
        position,
        fullname,
        phone,
        mail,
        dateOpen,
        dateClose,
        service,
        comment
      });
    } catch (err) {
      error.setError(err);
    }
  }

  async function removeOne({ id }) {
    try {
      return await helpdesk.emit('vpn:remove:one', { id });
    } catch (err) {
      error.setError(err);
    }
  }

  return { $reset, findAll, findOne, createOne, updateOne, removeOne };
});
