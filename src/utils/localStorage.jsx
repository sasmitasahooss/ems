const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the project proposal.",
          "date": "2024-10-20",
          "category": "Project",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Attend the client meeting.",
          "date": "2024-10-22",
          "category": "Meeting",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Submit the budget report.",
          "date": "2024-10-25",
          "category": "Finance",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Organize team building activity.",
          "date": "2024-10-21",
          "category": "HR",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Submit performance reviews.",
          "date": "2024-10-23",
          "category": "HR",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Prepare presentation for new client.",
          "date": "2024-10-26",
          "category": "Client",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Review project documentation.",
          "date": "2024-10-18",
          "category": "Documentation",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update company website.",
          "date": "2024-10-22",
          "category": "Development",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Fix reported bugs.",
          "date": "2024-10-24",
          "category": "Development",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Design new logo.",
          "date": "2024-10-17",
          "category": "Design",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Create branding guidelines.",
          "date": "2024-10-22",
          "category": "Marketing",
          "active": true,
          "new": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Prepare materials for marketing campaign.",
          "date": "2024-10-27",
          "category": "Marketing",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Analyze customer feedback.",
          "date": "2024-10-19",
          "category": "Customer Support",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Prepare weekly sales report.",
          "date": "2024-10-24",
          "category": "Sales",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Contact new leads.",
          "date": "2024-10-28",
          "category": "Sales",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage = ()=>{
   localStorage.setItem('employees', JSON
    .stringify(employees));
   localStorage.setItem('admin',JSON.stringify(admin));
}  

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees, admin)
}