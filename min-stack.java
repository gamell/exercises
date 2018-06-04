// https://leetcode.com/problems/min-stack/description/

class MinStack {

    private class Node {
        public Node next;
        public Node prevMin;
        public int val;
        
        public Node(int val) {
            this.val = val;
        }
        
    }
    
    private Node min;
    private Node top;
    
    /** initialize your data structure here. */
    public MinStack() {
        min = null;
        top = null;
    }
    
    public void push(int x) {
        Node node = new Node(x);
        node.next = top;
        node.prevMin = min;
        if (min == null || x < min.val) {   
            min = node;
        }
        top = node;
    }
    
    public void pop() {
        if (top != null) {
            if (top == min) {
                min = top.prevMin;
            }
            top = top.next;
        }
    }
    
    public int top() {
        return (top != null) ? top.val : 0;
    }
    
    public int getMin() {
        return min.val;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */