# Hy-Tech Profiles - Y.O.U. PEEKE Intern Blue Group
>Tuesday, June 7, 2022 | 10:05 AM

## Motivation
The Hyland Tech Outreach (TO) team serves many students each year for a variety of programs. However, there is not a current solution that keeps all of the student data in one place. The implementation of HyTech student profiles can help solve this problem and have a positive impact on the TO team. Such a mechanism will facilitate sign up data collection and mitigate data inconsistences (e.g., Jonathon Smith and John Smith are the same student, but show up as two different students). Storing this information in a database makes the data more secure and reduces the risk of accidentally editing or changing the data.  
 
## Idea
The main idea for this project is the creation of a HyTech student profile/account. This would allow our students to make an account and profile that contains information like their grade and school. Upon account creation, the record will be assigned a unique HyTech Student ID. This ID can become an input field during program signups to help with identification and data integrity later on.  You will provided with sample data so that the student data is not directly handled. 
 
The project will have two main components: a database and a front end user experience. This will help keep track of all of the students that come through Hyland Tech Outreach Programs, like our Camps, Clubs, Hackathons, field trips, and more. 
 
## Database
This project will allow you to explore and learn the elements of database design. One such element is CRUD, which in this case, means the database should allow for the user profile to be updated.
 
A fundamental element of any database is a primary key. This is a unique identifier for a given record in the database. The primary key convention for the student information has already been determined. It will be known as the Student ID and is explained below:

- Student Primary Key
  - Each user needs to be assigned a Student ID. This will act as a primary key for the student table. 
  - The primary key will have a `lastName.#` convention
  - The `.#` corresponds to the nth unique instance of that last name
  - For example: 
    - We have a new student, John Smith, register in April. He gets assigned the student ID `smith.1`.
    - In August, a new student, Jane Smith, registers. She gets assigned the student ID `smith.2`.

## Front End User Experience 
You will be able to make a basic frontend user experience (UX) that allows a registrant to make a Hy-Tech Account and Profile. The profile could be associated with an actual account that requires usernames and passwords. The profile UX will be simple, like a form to fill out which also can be edited in the future. 
 
The user will input their information, such as their first name, last name, and grade, as well as other fields deemed appropriate to include in the UX. When this gets stored in the database, it will be assigned a unique student key following the convention described above. 
 
## Fields Requirements
You will be given a basic wireframe to reference. The final project does not need to look like this, but must at least include: 

- First Name
- Last Name
- Student Email
- School
- Grades, written like below 
  - 6th, 7th, 8th, 9th, 10th, 11th, 12th, College Freshman, College Sophomore, College Junior, College Senior
- Display of Hy-Tech ID that is not editable (greyed out)

All fields beside the HyTech ID should be able to be updated and saved, as any of that information may need to be changed by the student. 
 
Some additional, nice to have features might include:
- List of programs the student has been involved in
  - See HyTech Programs.xlsx
- An area to optionally include more details about the student
  - Interests, hobbies, dream career, etc.