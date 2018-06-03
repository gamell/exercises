// https://leetcode.com/problems/largest-number/

class Solution {
    
    private class LargeNumberComparator implements Comparator<String> {
        @Override
        public int compare(String a, String b) {
            long order1 = Long.parseLong(a+b);
            long order2 = Long.parseLong(b+a);
            if (order1 > order2) return -1;
            if (order1 == order2) return 0;
            return 1;
        }
    }
    
    public String largestNumber(int[] nums) {
        String[] res = new String[nums.length];
        int i = 0;
        for(int num: nums) {
            res[i] = String.valueOf(num);
            i++;
        }
        
        Arrays.sort(res, new LargeNumberComparator());
        
        if(res[0].equals("0")) {
            return "0";
        }
        
        String largestNumber = new String();
        for (String part : res) {
            largestNumber += part;
        }
        
        return largestNumber;
    }
}