'use stirct';

const mergeSortedArrays = (nums1, m, nums2, n) => {

    for (let i = 0; i < n; i++) nums1[i + m] = nums2[i];

    nums1.sort((a, b) => a - b);

    return nums1;
}

module.exports = mergeSortedArrays;