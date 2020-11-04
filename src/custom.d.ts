type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型
    createdAt?: Date; // 类/构造函数  除了写数据类型之外还可以写类
};