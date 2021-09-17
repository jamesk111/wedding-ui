import {Component} from '@angular/core';
import {CE_GALLERY, SPRAGUER_GALLERY} from './constants';

@Component({
	selector: 'app-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
	public ceGallery = CE_GALLERY;
	public spraguerGallery = SPRAGUER_GALLERY;
}

