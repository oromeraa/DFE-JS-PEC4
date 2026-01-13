import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "defaultImage"
})
export class DefaultImagePipe implements PipeTransform {
    transform(value: string): string {
        const defaultImage = '../assets/images/default-image.jpg';

        if (!value || value === '') {
            return defaultImage;
        }
        return value;
    }
}
