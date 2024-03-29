class Trie {

    private TrieNode root;
    
    private class TrieNode {
        private TrieNode[] links;
        
        private final int R = 26;
        
        private boolean isEnd;
        
        public TrieNode() {
            links = new TrieNode[R];
        }
        
        public boolean containsKey(char ch) {
            return links[ch-'a'] != null;
        }
        
        public TrieNode get(char ch) {
            return links[ch-'a'];
        }
        
        public void put(char ch, TrieNode node) {
            links[ch-'a'] = node;
        }
        
        public void setEnd() {
            isEnd = true;
        }
        
        public boolean isEnd() {
            return isEnd;
        }
    }
    
    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode node = root;
        for(int i = 0; i < word.length(); i++) {
            char currChar = word.charAt(i);
            if (!node.containsKey(currChar)) {
                node.put(currChar, new TrieNode());
            }
            node = node.get(currChar);
        }
        node.setEnd();
    }
    
    /** Returns if the word is in the trie. */
    public TrieNode searchPrefix(String word) {
        TrieNode node = root;
        for(int i = 0; i < word.length() && node != null; i++) {
            char currChar = word.charAt(i);
            if (node.containsKey(currChar)) {
                node = node.get(currChar);
            } else {
                return null;
            }
        }
        return node;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEnd();
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode node = searchPrefix(prefix);
        return node != null;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */