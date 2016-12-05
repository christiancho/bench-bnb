export const fetchBenches = (bounds, success) => {
  return $.ajax({
    method: 'get',
    url: 'api/benches',
    data: { bounds },
    dataType: 'JSON',
    success,
    error: err => console.log(err)
  });
};

export const sendBench = bench => {
  return $.ajax({
      method: 'post',
      url: 'api/benches',
      data: { bench },
      dataType: 'JSON',
  });
};
