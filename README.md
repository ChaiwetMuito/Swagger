# swagger-api-sample
 

## web สำหรับเขียน swagger
[Goto SwaggerEditor](http://editor.swagger.io/#/) import file swagger-api-sample/swagger.yaml สำหรับลองรันกับ api นี้

## วิธีลองใช้ 
>1. เข้า web http://editor.swagger.io/#/ สำหรับเขียน swagger
>2. import file swagger-api-sample/swagger.yaml สำหรับลองรันกับ api นี้
>3. ลง npm install ใน api ด้วย
>4. run api ด้วย npm start หรือ node server.js

## วิธีการเขียน swagger
>1. swagger เขียนแบบ .yaml ที่ให้ความสำคัญกับช่องว่าง หรือ spacebar 
>2. info คือการเขียนหัวเรื่องด้านบนเว็บ  
-title จะบอกหัวเรื่อง
-version จะบอก version ของtitle
-description เป็นคำอธิบาย
>3. host คือ url ที่จะทำการ ยิง request ไป
>4. tags จะเป็นการสร้างหัวข้อ สำหรับแต่ละ request 
>5. path จะเป็นการสร้างที่ๆเราจะส่ง request ต้องกำหนดด้วยว่าเป็น post หรือ get และ มีการกำหนด parameters ที่ใช่ในการส่งด้วย ซึ่ง path นั้น ต้องเชื่อมกับ tags ที่เราสร้างในข้อ 4 
>6. definitions คือการสร้าง model สำหรับข้อมูล เพื่อที่จะสามารถเรียกใช้ได้โดยไม่ต้องเขียน model ใหม่



