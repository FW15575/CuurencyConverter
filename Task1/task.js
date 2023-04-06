var cumulative_sum, good_groups, group_avg, group_size, group_sum, marks, n, remaining_avg, remaining_size, remaining_sum;
n = Number.parseInt(input());
marks = list(map(let,input().split()));
cumulative_sum = [0] * (n + 1);

for (var i = 1, _pj_a = n + 1; i < _pj_a; i += 1) {
  cumulative_sum[i] = cumulative_sum[i - 1] + marks[i - 1];
}

good_groups = [];

for (var start = 1, _pj_a = n + 1; start < _pj_a; start += 1) {
  for (var end = start, _pj_b = n + 1; end < _pj_b; end += 1) {
    group_size = end - start + 1;
    remaining_size = n - group_size;
    group_sum = cumulative_sum[end] - cumulative_sum[start - 1];
    remaining_sum = cumulative_sum[n] - group_sum;
    group_avg = group_sum / group_size;
    remaining_avg = remaining_sum / remaining_size;

    if (group_avg > remaining_avg) {
      good_groups.append([start, end]);
    }
  }
}

good_groups.sort();
console.log(good_groups.length);

for (var group, _pj_c = 0, _pj_a = good_groups, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  group = _pj_a[_pj_c];
  console.log(group[0], group[1]);
}
