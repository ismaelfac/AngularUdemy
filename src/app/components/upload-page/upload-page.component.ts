import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  public previsualizacion: string = '';
  public archivos: any = [];
  public loading: boolean = false;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  captureFile(event: any) {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base
    });
    this.archivos.push(archivoCapturado);
  }

  extraerBase64 = async ($event: any) => 
    new Promise(resolve => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
      } catch (e) {
        return null;
      }
      return $event;
  });

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }
  subirArchivo(): any {
    try {
      this.loading = true;
      const formData = new FormData();
      this.archivos.forEach((archivo :any) => {
        formData.append('files', archivo);
        console.log(archivo);
        this.loading = false;
      })
    } catch (error) {
      this.loading = false;
    }
  }
}
