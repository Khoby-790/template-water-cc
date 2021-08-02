import {HomeIcon, ArchiveIcon, UsersIcon, UserGroupIcon, ChartBarIcon} from '@heroicons/react/outline';

type RouteType = {
    name:string;
    path: string;
    icon: React.FC<React.ComponentProps<'svg'>>;
    description?:string;
}

export const routes: RouteType[]  = [
    {
        name:"Dashboard",
        path:"/app/",
        icon: HomeIcon 
    },
    {
        name:"Customers",
        path:"/app/customers",
        icon:  UserGroupIcon
    },
    {
        name:"Agents",
        path:"/app/agents",
        icon:  UsersIcon
    },
    {
        name:"Bills",
        path:"/app/bills",
        icon:  ArchiveIcon
    },
    {
        name:"Reports",
        path:"/app/reports",
        icon:  ChartBarIcon
    }
]

export function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}