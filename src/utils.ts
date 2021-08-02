import { ReactNode } from "react";
import {HomeIcon, ArchiveIcon} from '@heroicons/react/outline';

type RouteType = {
    name:string;
    path: string;
    icon: ReactNode;
    description?:string;
}

export const routes: RouteType[]  = [
    {
        name:"Dashboard",
        path:"/app/",
        icon:HomeIcon
    },
    {
        name:"Bills",
        path:"/app/bills",
        icon: ArchiveIcon
    }
]

export function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}