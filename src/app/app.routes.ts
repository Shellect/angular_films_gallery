import { Routes } from '@angular/router';
import {GalleryComponent} from "components";

export const routes: Routes = [
    {
        path: "**",
        component: GalleryComponent
    }
];
