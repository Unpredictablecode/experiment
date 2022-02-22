
let string="this is to test the longest";
let s=string.split(' ');
let a=[];
for(let i=0;i<s.length;i++){
    a[i]=s[i].length;
  // console.log(a[i]);
}
let max=a[0];
let max_pos=0;
for(let i=0;i<a.length;i++){
    if(a[i]>max)
    {
        max=a[i];
        max_pos=i;
    }
}
console.log(s[max_pos]);