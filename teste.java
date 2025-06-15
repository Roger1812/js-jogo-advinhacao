public class FibonacciChecker {
    public static void main(String[] args) {
        System.out.println(isFibonacciSequence(1, 2, 3)); // false
        System.out.println(isFibonacciSequence(2, 3, 5)); // true
    }

    public static boolean isFibonacciSequence(int a, int b, int c) {
        return (b == a + 1) && (c == a + b);
    }
}
