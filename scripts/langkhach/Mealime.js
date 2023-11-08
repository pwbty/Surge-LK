var obj = JSON.parse($response.body);
obj.subscription = {
  created_at: 1699095873000,
  is_active: true,
  canceled_at: null
};
$done({body: JSON.stringify(obj)});