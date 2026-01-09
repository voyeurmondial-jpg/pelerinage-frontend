function processPayment(data, callback) {
  setTimeout(() => {
    const id = `PEL-${Date.now()}`;
    callback({ ...data, id, paid: true });
  }, 2000);
}
