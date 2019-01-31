## 1.项目简介
本项目旨在分析12306接口协议，构建一个简单易用的Rest API风格的火车票订票服务。
为火车票抢购软件提供强有力的后台支撑。

## 2.接口公共协议

### 协议说明
- 接口采用HTTP的POST方式请求。
- 输入和输出参数都采用UTF-8编码。
- 出入参数均为json格式
### 参数描述
#### 公共请求参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| ------: | :------: |:------: |
| --- | --- | --- | --- |--- |
#### 公共响应参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Code | 结果代码 | String | N |0表示请求成功返回；非0表示存在业务异常。业务异常详见错误码 |
| Message | 错误描述 | String | Y | Code非零时有值，表示错误描述 |
| Result | 结果数据 | Object | Y | 不同的请求返回的不同结果。 |

## 3.火车票业务协议
### 3.1获取所有/热点车站信息
#### 方法名称
- ```train/getAllCity```
- ```train/getHotCity```
#### 使用说明
- ```train/getAllCity```获取所有的火车站信息，建议每天拉取一次保存到本地，以免影响性能。
- ```train/getHotCity```获取热点火车站信息，建议每天拉取一次保存到本地，以免影响性能。
#### 请求参数
无
#### 响应参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Stations | 火车站列表 | Station[] | N | |

Station

| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Name | 站点名 | String | N | |
| StationCode | 车站代码 | String | N |  |
| pingYin | 车站拼音 | String | N |  |
| PingYinShort | 车站简拼 | String | N |  |

### 3.2关键字搜索车站
#### 使用说明
#### 方法名称
- ```train/searchCity```
#### 使用说明
- 使用关键字搜索匹配到的车站
#### 请求参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Keyword | 关键字 | String | N | |
#### 响应参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Stations | 火车站列表 | Station[] | N | |

Station

| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Name | 站点名 | String | N | |
| StationCode | 车站代码 | String | N |  |
| pingYin | 车站拼音 | String | N |  |
| PingYinShort | 车站简拼 | String | N |  |

### 3.3 火车票查询
#### 使用说明
#### 方法名称
- ```train/getTicketList```
#### 使用说明
- 查询火车票列表
#### 请求参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| FromStationCode | 出发站点代码 | String | N | |
| ToStationCode | 到达站点代码 | String | N | |
| FromDate | 出发日期（格式：yyyy-mm-dd） | String | N | |
| IsStudent | 是否是学生票(默认成人票) | Boolean | N | |
#### 响应参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Tickets | 车票信息列表 | Ticket[] | N | |

Ticket

| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| TrainCode | 车次代码 | String | N | |
| TrainType | 车次类型 | String | N |  |
| FromStation | 出发站点名字 | String | N |  |
| ToStation | 到达站点名字 | String | N |  |
| FromStationType | 出发站点类型名 "始|终|过"类型 | String | N |  |
| ToStationType | 到达站点类型名 "始|终|过"类型 | String | N |  |
| FromTime | 出发时间 | String | N |  |
| ToTime | 到达时间 | String | N |  |
| RunTime | 运行时间 | String | N |  |
| CanBook | 该车次是否有余票可以预定，所有席别无票则为false | Boolean | N |  |
| SwzNum | 商务座/特等座剩余票数 有|表示充足 --|表示无此类型的座位 数字表示剩余座位数 下同| String | N |  |
| SwzPrice | 商务座/特等座价格 | BigDecimal | N |  |
| YdzNum | 一等座剩余票数| String | N |  |
| YdzPrice | 一等座价格 | BigDecimal | N |  |
| EdzNum | 二等座剩余票数| String | N |  |
| EdzPrice | 二等座价格 | BigDecimal | N |  |
| GjrwNum | 高级软卧剩余票数| String | N |  |
| GjrwPrice | 高级软卧价格 | BigDecimal | N |  |
| RwNum | 软卧/一等卧价格| String | N |  |
| RwPrice | 软卧/一等卧剩余票数 | BigDecimal | N |  |
| DwNum | 动卧剩余票数| String | N |  |
| DwPrice | 动卧价格 | BigDecimal | N |  |
| YwNum | 硬卧剩余票数| String | N |  |
| YwPrice | 硬卧价格 | BigDecimal | N |  |
| RzNum | 软座剩余票数| String | N |  |
| RzPrice | 软座价格 | BigDecimal | N |  |
| YzNum | 硬座剩余票数| String | N |  |
| YzPrice | 硬座价格 | BigDecimal | N |  |
| WzNum | 无座剩余票数| String | N |  |
| WzPrice | 无座价格 | BigDecimal | N |  |
| QtNum | 其他剩余票数| String | N |  |
| QtPrice | 其他价格 | BigDecimal | N |  |

### 3.4 查询车次经停信息
#### 使用说明
#### 方法名称
- ```train/getTrainLine```
#### 使用说明
- 查询车次经停信息
#### 请求参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| TrainCode | 车次代码 | String | N | |
| FromStationCode | 出发站点代码 | String | N | |
| ToStationCode | 到达站点代码 | String | N | |
| FromDate | 出发日期（格式：yyyy-mm-dd） | String | N | |
#### 响应参数
| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| Stops | 经停信息列表 | Stop[] | N | |
| StartStationName | 始发站名 | String | N | |
| EndStationName | 终点站名 | String | N | |
| TrainCode | 车次代码 | String | N | |
| TrainClassName | 车次类型 例如：快速 | String | N | |
| ServiceName | 服务类型 例如："无空调" ， "有空调" | String | N | |

Stop

| 节点 | 名称 | 类型 | 可为空 | 说明 |
| :------:| :------:| :------: | :------: |:------: |
| StartTime | 出发时间（格式 HH:mm） | String | N | |
| ArriveTime | 到达时间（格式 HH:mm 或者----） | String | N |  |
| StationName | 到达站名 | String | N |  |
| StopoverTime | 停留时间（分钟） 可能为---- | String | N |  |
| StationNo | 站序（01开始） | String | N |  |
| IsSearchStation | 是否是我们搜索的出行站和到达站 false不是 true是 | String | N |  |

