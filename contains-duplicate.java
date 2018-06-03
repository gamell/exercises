// https://leetcode.com/problems/contains-duplicate/description/

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet h = new HashSet(nums.length);
        boolean dupe = false;
        for(int i = 0; i < nums.length; i++) {
            int curr = nums[i];
            if (h.contains(curr)) {
                dupe = true;
                break;
            }
            h.add(curr);
        }
        return dupe;
    }
}