const { useQuasar } = Quasar;
const { onMounted, onUnmounted } = Vue;
const app = Vue.createApp({
  setup() {
    const $q = useQuasar();
    const showNotif = (e) => {
      const text = e.data.text;
      const length = e.data.length;
      const type = e.data.type;
      const caption = e.data.caption;

      switch (type) {
        case 'success':
          color = 'positive';
          icon = 'done';
          break;
        case 'info':
          color = 'info';
          icon = 'info';
          break;
        case 'error':
          color = 'negative';
          icon = 'dangerous';
          break;
        case 'warn':
          color = 'warning';
          icon = 'warning';
          break;
        case 'police':
          color = 'primary';
          icon = 'local_police';
          break;
        case 'ambulance':
          color = 'negative';
          icon = 'fas fa-ambulance';
          break;
      }

      if (text.length > 100) {
        multiline = true;
      } else {
        multiline = false;
      }

      $q.notify({
        message: text,
        caption: caption,
        multiLine: multiline,
        color: color,
        group: true,
        progress: true,
        position: 'top-right',
        timeout: length,
        icon: icon,
      });
    };
    onMounted(() => {
      window.addEventListener('message', showNotif);
    });
    onUnmounted(() => {
      window.removeEventListener('message', showNotif);
    });
    return {};
  },
});
app.use(Quasar, { config: {} });
app.mount('#q-app');