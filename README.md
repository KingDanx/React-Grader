# Flexion-Code-Challenge

![image](https://user-images.githubusercontent.com/88867180/153743718-09ef6a7a-8ca1-4789-92f1-f8e89d26eb78.png)
![image](https://user-images.githubusercontent.com/88867180/153743809-b192f64f-c509-4b30-b7b4-dec2f8105934.png)
![image](https://user-images.githubusercontent.com/88867180/153743905-e5df2384-5ada-4608-a8df-652bdeb88a81.png)
![image](https://user-images.githubusercontent.com/88867180/153743924-86a415d8-d18b-45b1-a336-0229a9b10291.png)




To use: 
<ul>
  <li>Clone repository and run npm install.</li>
  <li>Create a config folder inside the server folder.</li>
  <li>In the config folder create default.json and link mongoDB to the application.</li>
  <li>Note, in the picture where it says AmbitiousForgetfuls, this is the name you gave your database in mongoDB.</li>
  <li>jwt is not used in this application</li>
</ul>

![image](https://user-images.githubusercontent.com/88867180/148765354-9ec509f2-a2ec-4375-acbb-fc424a032c0f.png)

Development tasks to improve my solution to the code challenge:
1. I created folders and files to add students to the database.  I would like to build out the student schema and assign graded test to them.
2. I would like to add users to this application. The users could then log-in and search the tests/students they have created rather than skimming the whole database.
3. I would like to consolidate some of my jsx files into components.  Currently a few of my files are several hundred lines of code.
4. I would like to have my own libary to do the conversions.  I used two different conversion libraries and both had issues that cause me to create work arounds in order to implement them and save time. 
5. I would like to implement the optional challenge of integrating CI/CD once I have a better understanding of the process.
6. I will add condtions that will give an output with an invalid input.  Currently users are not allowed to proceed in any action if they have invalid inputs.
