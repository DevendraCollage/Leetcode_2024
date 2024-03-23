//* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

//* Increment the large integer by one and return the resulting array of digits.
//* Author: Devendra Parmar
//* Date: 23/03/2024

import java.util.Arrays;

public class Problem_1 {
    public int[] plusOne(int[] digits) {
        int carry = 1;
        for (int i = digits.length - 1; i >= 0; i--) {
            int sum = digits[i] + carry;
            digits[i] = sum % 10;
            carry = sum / 10;
        }
        if (carry == 1) {
            digits = new int[digits.length + 1];
            digits[0] = 1;
        }
        return digits;
    }

    public static void main(String[] args) {
        Problem_1 p = new Problem_1();
        System.out.println(Arrays.toString(p.plusOne(new int[] { 1, 2, 3, 4 })));
    }
}