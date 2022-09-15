function solution(queue1, queue2){
  let count = 0;
  const sum = (arr) => arr.reduce((a,b)=>a+b)
  let totalArr = [...queue1, ...queue2];
  
  // maxCount보다 더 많은 count 누적 시 -1를 반환하기 위해서 변수 선언
  let maxCount = totalArr.length*2
  
  // 각 큐는 전체 원소의 합을 나누기 2한 값을 가져야 하기 때문에 이를 goalNum으로 지정.
  let goalNum = sum(totalArr)/2;
  
  let start = 0;
  let end = queue1.length;
  let totalNum = sum(totalArr.slice(start, end));
  
  // queue1의 각 원소들의 합을 totalNum에 할당하고, 이 값이 goalNum보다 크면 가장 앞에 있는 값을 빼고, goalNum보다 작으면 뒤에 값을 하나 더 붙이는 방식.
  // totalNum과 goalNum이 같아질 때 까지 해당 과정을 반복한다.
  while(count <= maxCount){
    if(totalNum < goalNum){
      totalNum += totalArr[end++];
    }else if(totalNum > goalNum){
      totalNum -= totalArr[start++];
    }else if(totalNum === goalNum) return count
    count++
  }
  
  // count가 maxCount의 값을 넘길 때까지 두 큐의 합을 같에 만들지 못한다면 -1을 반환.
  return -1;
}
