import { Routes } from '@angular/router';
import { AuthGuard, LoggedInGuard } from './core/guards/auth.guard';

const CLASS_ROUTES={path:'class',
children:[
    {path:'',loadComponent:()=>import('./feature/class/class.component').then(c=>c.ClassComponent)},
    {path:'create',loadComponent:()=>import('./feature/class/components/add-class/add-class.component').then(c=>c.AddClassComponent)},
]
};

const STUDENT_ROUTES={path:'students',
children:[
    {path:'',loadComponent:()=>import('./feature/students/students.component').then(c=>c.StudentsComponent)},
    {path:'create',loadComponent:()=>import('./feature/students/components/add-student/add-student.component').then(c=>c.AddStudentComponent)},
]
};

const EMPLOYEE_ROUTES={path:'employees',
children:[
    {path:'',loadComponent:()=>import('./feature/employees/employees.component').then(c=>c.EmployeesComponent)},
    {path:'create',loadComponent:()=>import('./feature/employees/components/add-employee/add-employee.component').then(c=>c.AddEmployeeComponent)},
]
};

const DASHBOARD_ROUTES= {
    path:'dashboard',loadComponent:()=>import('./feature/layout/layout.component').then(c=>c.LayoutComponent),children:
    [
        {path:'',loadComponent:()=>import('./feature/dashboard/dashboard.component').then(c=>c.DashboardComponent)},
        EMPLOYEE_ROUTES,
        CLASS_ROUTES,
        STUDENT_ROUTES,
        {path:'subjects',loadComponent:()=>import('./feature/subjects/subjects.component').then(c=>c.SubjectsComponent)}
    ],
    canActivate:[AuthGuard]
};



export const routes: Routes = [
    DASHBOARD_ROUTES,

    {path:'auth',loadChildren:()=>import('./core/auth/auth.routes').then(m=>m.routes),canActivate:[LoggedInGuard]},
    
    // {path:'auth',loadChildren:()=>import('./module/auth/auth.module').then(m=>m.AuthModule)},
    {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

