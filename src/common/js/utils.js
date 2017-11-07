/**
 *  工具类
 */

/**
 * 替换url
 * srcUrl 初始url
 *
 */
export function replaceUrl (srcUrl) {
    return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
};

// exports.replaceUrl = (srcUrl) => {
//     return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
// };

/**
 * 获取日期函数 为了让axios请求 example 20171001
 */
export function loaddate (times, dataaa) {
        console.log('times是    ' + times);
        let date = new Date();
        let seperator1 = '-';
        let seperator2 = ':';
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        // 根据请求次数作差
        // 小于0 的情况;
        if ((strDate - times) < 0) {
            // 当前日期小于次数 就要变月份
            month = date.getMonth();
             // 30天的月份;
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                strDate = 31 - times + strDate;
                if (month >= 1 && month <= 9) {
                    month = '0' + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                        strDate = '0' + strDate;
                }
                month = month.toString();
                strDate = strDate.toString();
                dataaa = date.getFullYear() + month + strDate;
                }
            // 31天的月份
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                strDate = 32 - times + strDate;
                if (month >= 1 && month <= 9) {
                    month = '0' + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                        strDate = '0' + strDate;
                }
                month = month.toString();
                strDate = strDate.toString();
                dataaa = date.getFullYear() + month + strDate;
            }
        } else if (strDate - times >= 0) {
            if (month >= 1 && month <= 9) {
                month = '0' + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate;
            }
            month = month.toString();
            strDate = strDate.toString();
            dataaa = date.getFullYear() + month + strDate - times + 1;
        }
        return dataaa;
    };
