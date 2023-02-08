console.log("Watashi ga kita!");
const codeSnippets = [];
codeSnippets[0] = "public static void sortForLoop(int[] arr) {/n"+
   "    int n = arr.length;/n"+
   "    for (int i = 1; i < n; i++) {/n"+
   "        int key = arr[i];/n"+
   "        int j = i - 1;/n"+
   "        while (j >= 0 && arr[j] > key) {/n"+
   "            arr[j + 1] = arr[j];/n"+
   "            j--;/n"+
   "        }/n"+
   "        arr[j + 1] = key;/n"+
   "    }/n"+
   "}";
