package org.sang.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;

/**
 * Tip: 相似对象拷贝工具
 * 1.要求: 对象 对应的字段名称必须一样
 *
 * @author Im.Yan
 * @date 2019/2/15
 */
public class LikeObjCopyUtil {


    private final static Logger logger = LoggerFactory.getLogger(LikeObjCopyUtil.class);

    /**
     * 将一个对象的字段内容拷贝到另一个对象
     *
     * @param beCopy
     * @param toCopy
     * @param <T>
     * @param <S>
     */
    public static <T, S> void copyObjFieldsToOther(T beCopy, S toCopy) {
        Class<?> beCopyClass = beCopy.getClass();
        Class<?> toCopyClass = toCopy.getClass();
        Field[] fields = toCopyClass.getDeclaredFields();
        for (Field field : fields) {
            String toCopyFiledName = field.getName();
            try {
                Field beCopyFiled = beCopyClass.getDeclaredField(toCopyFiledName);
                beCopyFiled.setAccessible(true);
                Object beCopyFiledValue = beCopyFiled.get(beCopy);
                field.setAccessible(true);
                field.set(toCopy, beCopyFiledValue);
                field.setAccessible(false);
                beCopyFiled.setAccessible(false);
            } catch (NoSuchFieldException e) {
                logger.error("{}对象不存在 {}字段", beCopyClass.getName(), toCopyFiledName);
            } catch (IllegalAccessException e) {
                logger.error("{}对象不能访问 {}字段", beCopyClass.getName(), toCopyFiledName);
            }
        }
    }
}
