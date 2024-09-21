import { Routes } from '@angular/router';
import {DetailsPageComponent, GalleryComponent} from "components";

export const routes: Routes = [
    {
        path: "film/:id",
        component: DetailsPageComponent
    },
    {
        path: "**",
        component: GalleryComponent
    }
];
