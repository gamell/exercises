// https://leetcode.com/submissions/detail/157201059/

class Solution {
    public int singleNumber(int[] nums) {
        HashSet<Integer> set = new HashSet<>(nums.length);
        for(int num : nums) {
            if(set.contains(num)) {
                set.remove(num);
            } else {
                set.add(num);
            }
        }
        return set.toArray(new Integer[1])[0];
    }
}