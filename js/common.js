// 菜单
var students = [
   { "group": 1, "id": 49, "index": 0, "name": "炒青菜" },
   { "group": 1, "id": 39, "index": 2, "name": "抄花菜" },
   { "group": 1, "id": 37, "index": 3, "name": "韭菜豆芽" },
   { "group": 1, "id": 31, "index": 4, "name": "雪菜粉皮" },
   { "group": 3, "id": 32, "index": 6, "name": "鸭血豆腐" },
   { "group": 3, "id": 34, "index": 7, "name": "清炒藕片" },
   { "group": 3, "id": 15, "index": 8, "name": "青椒土豆丝" },
   { "group": 3, "id": 29, "index": 9, "name": "地三鲜" },
   { "group": 2, "id": 33, "index": 10, "name": "毛豆冬瓜" },
   { "group": 5, "id": 18, "index": 11, "name": "清炒菊豆" },
   { "group": 2, "id": 43, "index": 12, "name": "海带丝" },
   { "group": 2, "id": 36, "index": 13, "name": "萝卜干毛豆" },
   { "group": 2, "id": 26, "index": 14, "name": "咸菜毛豆" },
   { "group": 4, "id": 24, "index": 16, "name": "韭黄炒蛋" },
   { "group": 4, "id": 19, "index": 17, "name": "番茄炒蛋" },
   { "group": 4, "id": 21, "index": 18, "name": "清炒西兰花" },
   { "group": 4, "id": 21, "index": 18, "name": "炒玉米" },
   { "group": 4, "id": 20, "index": 19, "name": "外婆菜炒蛋" },
   { "group": 5, "id": 23, "index": 26, "name": "鱼香茄子" },
   { "group": 5, "id": 25, "index": 27, "name": "酸豆角肉丝" },
   { "group": 5, "id": 22, "index": 28, "name": "蛤蜊蒸蛋" },
   { "group": 1, "id": 7, "index": 29, "name": "百叶炒肉丝" },
   { "group": 3, "id": 38, "index": 30, "name": "青椒炒肉丝" },
   { "group": 2, "id": 27, "index": 31, "name": "回锅肉" },
   { "group": 4, "id": 14, "index": 32, "name": "花菜肉片" },
   { "group": 1, "id": 4, "index": 33, "name": "茭白毛豆肉丝" },
   { "group": 8, "id": 1, "index": 34, "name": "生仔仔鸡" },
   { "group": 6, "id": 11, "index": 36, "name": "小炒肉" },
   { "group": 6, "id": 3, "index": 37, "name": "酱爆猪肝" },
   { "group": 6, "id": 9, "index": 38, "name": "百叶烧肉" },
   { "group": 6, "id": 30, "index": 39, "name": "萝卜烧肉" },
   { "group": 3, "id": 16, "index": 40, "name": "宫保鸡丁" },
   { "group": 2, "id": 5, "index": 41, "name": "青椒炒鸡旽" },
   { "group": 6, "id": 13, "index": 42, "name": "鱼香肉丝" },
   { "group": 5, "id": 46, "index": 43, "name": "芹菜炒腊肉" },
   { "group": 6, "id": 12, "index": 44, "name": "三鲜肉皮" },
   { "group": 7, "id": 45, "index": 46, "name": "芸豆炒猪耳" },
   { "group": 7, "id": 48, "index": 47, "name": "红烧鲫鱼" },
   { "group": 8, "id": 47, "index": 48, "name": "鲳鱼清蒸红烧" },
   { "group": 4, "id": 10, "index": 49, "name": "清蒸鲈鱼" },
   { "group": 7, "id": 28, "index": 50, "name": "红烧带鱼" },
   { "group": 7, "id": 17, "index": 51, "name": "狮子头" },
   { "group": 7, "id": 35, "index": 52, "name": "油爆虾" },
   { "group": 7, "id": 41, "index": 53, "name": "毛血旺" },
   { "group": 8, "id": 42, "index": 54, "name": "酸菜鱼" },
   { "group": 8, "id": 2, "index": 56, "name": "水煮鱼" },
   { "group": 8, "id": 44, "index": 57, "name": "排骨汤" },
   { "group": 8, "id": 49, "index": 58, "name": "马桥香干烧肉" },
   { "group": 8, "id": 50, "index": 59, "name": "千叶豆腐" },
   { "group": 6, "id": 51, "index": 60, "name": "百叶丝肉丝" },
   { "group": 6, "id": 52, "index": 61, "name": "香肠炒蛋" },
   { "group": 6, "id": 53, "index": 62, "name": "大白菜粉丝肉丝" },
   { "group": 6, "id": 54, "index": 63, "name": "红烧猪手" },
   { "group": 5, "id": 55, "index": 64, "name": "韭菜豆芽" },
   { "group": 5, "id": 56, "index": 65, "name": "空心菜" },
   { "group": 4, "id": 57, "index": 66, "name": "红烧鸡腿" },
   { "group": 4, "id": 58, "index": 67, "name": "苦瓜炒蛋" },
   { "group": 4, "id": 59, "index": 68, "name": "蒜苗牛肚" },
   { "group": 3, "id": 60, "index": 69, "name": "丝瓜毛豆肉丝" },
   { "group": 3, "id": 61, "index": 70, "name": "毛豆冬瓜" },
   { "group": 3, "id": 62, "index": 71, "name": "鱼头豆腐汤" },
   { "group": 1, "id": 63, "index": 72, "name": "干烧四季豆" },
];
/**
 * 通过id重新排序
 * @param arr
 * @returns {*}
 */
function sortStuentsById(arr) {
   for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j].id > arr[j + 1].id) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
         }
      }
   }
   return arr;
}
var start = 0;
var end = 47 + 12;

function seleteStudent() {
   if (my$("btnSet").getAttribute("clicked")) {

      var stuBox = document.getElementsByClassName("person");
      var indexArr = getIndexById(my$("btnSet").getAttribute("from"), my$("btnSet").getAttribute("to"));

      var random = parseInt(Math.random() * indexArr.length);


      // 排他 清除其他背景色
      for (var i = 0; i < stuBox.length; i++) {
         stuBox[i].style.background = "";
      }

      // 设置选中的背景色
      stuBox[indexArr[random]].style.background = "red";


   } else {

      var stuBox = document.getElementsByClassName("person");
      // 获取从start到end的随机数
      var random = parseInt(Math.random() * (end - start + 1) + start);
      // 排他 清除其他背景色
      for (var i = 0; i < stuBox.length; i++) {
         stuBox[i].style.background = "";
      }
      if (stuBox[random].className !== "person") {
         seleteStudent();
      } else {
         // 设置选中的背景色
         stuBox[random].style.background = "red";

      }
   }

}

function selectGroup() {
   var random = parseInt(Math.random() * 8 + 1);
   for (var i = 0; i < stuList.length; i++) {
      stuList[i].style.background = "";
      if (stuList[i].group == random) {
         stuList[i].style.background = "orange";
      }
   }
}
/**
 * 通过指定的id返回, 返回index的数组
 * @param idFrom
 * @param idTo
 * @returns {Array}
 */
function getIndexById(idFrom, idTo) {
   idFrom = Number(idFrom);
   idTo = Number(idTo);

   var arr = [];
   for (var i = idFrom; i <= idTo; i++) {
      for (var j = 0; j < students.length; j++) {
         if (students[j].id === i) {
            arr.push(students[j].index);
         }
      }
   }
   return arr;
}

/**
 * 在node节点之前插入占位框
 * @param node
 */
function zhanwei(node) {
   var s1 = document.createElement("div");
   s1.className = "person road";
   content.insertBefore(s1, node);
}
/**
 * 通过id获取元素节点
 * @param id
 * @returns {Element}
 */
function my$(id) {
   return document.getElementById(id);
}


/**
 * 判断书否在数组中存在
 *
 * @param {any} str
 * @param {any} arr
 * @returns
 */
function isInArray(str, arr) {
   for (var i = 0; i < arr.length; i++) {
      if (str == arr[i]) {
         return true;
      }
   }
   return false;
}


/**
 * 更改五角星的颜色的类
 *
 * @param {any} ele
 * @param {any} count 更改几个
 * @param {any} cls
 */
function changeIClassName(ele, count, cls) {
   var iList = ele.getElementsByTagName("i");
   for (var i = 0; i < count; i++) {
      iList[i].className = cls;
   }
}

function changeBgClassName(ele, path) {
   ele.style.background = "url(" + path + ")";
}
