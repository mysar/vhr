package org.sang.common;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Tip: 集合分页工具类
 *
 * @author Im.Yan
 * @date 2019/2/15
 */
public class PageUtil {

    public static List getPage(List list, int pageNum, int pageSize) {
        // 数据总条数
        int totalcount = list.size();
        // 总页数
        int pagecount = 0;
        int m = totalcount % pageSize;
        if (m > 0) {
            pagecount = totalcount / pageSize + 1;
        } else {
            pagecount = totalcount / pageSize;
        }
        List subList;
        if (m == 0) {
            subList = list.subList((pageNum - 1) * pageSize, pageSize * (pageNum));
            System.out.println(subList);
        } else {
            if (pageNum == pagecount) {
                subList = list.subList((pageNum - 1) * pageSize, totalcount);
                System.out.println(subList);
            } else {
                subList = list.subList((pageNum - 1) * pageSize, pageSize * (pageNum));
                System.out.println(subList);
            }
        }
        return subList;
    }

    public static List getPage(Set set, int pageNum, int pageSize) {
        List subList = new ArrayList(set);
        return getPage(subList, pageNum, pageSize);
    }

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 1; i < 52; i++) {
            list.add(i);
        }
        getPage(list, 2, 10);
    }
}
