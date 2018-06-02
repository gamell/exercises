// https://leetcode.com/problems/add-and-search-word-data-structure-design/description/

class WordDictionary {

    private class TrieNode {
        
        private TrieNode[] links;
        private boolean isEnd;
        
        public TrieNode() {
            links = new TrieNode[26];
            isEnd = false;
        }
        
        public boolean contains(char ch){
            return links[ch-'a'] != null; 
        }
        
        public TrieNode get(char ch) {
            return links[ch-'a']; 
        }
        
        public TrieNode[] getLinks() {
            return links;
        }
        
        public TrieNode put(char ch, TrieNode node) {
            links[ch-'a'] = node;
            return node;
        }
        
        public void setEnd() {
            isEnd = true;
        }
        
        public boolean isEnd() {
            return isEnd;
        }
    }
    
    private TrieNode root;
    
    /** Initialize your data structure here. */
    public WordDictionary() {
        root = new TrieNode();
    }
    
    /** Adds a word into the data structure. */
    public void addWord(String word) {
        TrieNode node = root;
        for(int i = 0; i < word.length(); i++) {
            char currChar = word.charAt(i);
            if(!node.contains(currChar)) {
                node = node.put(currChar, new TrieNode());
            } else {
                node = node.get(currChar);
            }
        }
        node.setEnd();
    }
    
    private boolean searchFrom(String word, int i, TrieNode node) {
        if (i == word.length()) return node != null && node.isEnd();
        char currChar = word.charAt(i);
        if (currChar == '.') {
            boolean found = false;
            TrieNode[] links = node.getLinks();
            for (TrieNode n : links) {
                if (n != null) {
                    found = found || searchFrom(word, i + 1, n);
                }
            }
            return found;
        } else if(node.contains(currChar)) {
            return searchFrom(word, i + 1, node.get(currChar));
        }
        return false;   
    }
    
    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    public boolean search(String word) {
        return searchFrom(word, 0, root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */