import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electronyzer';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private electronService: ElectronService) { }

  getContent(): Promise<string> {
    return this.electronService.ipcRenderer.invoke('get-file-content');}

  setContent(content: string) {
    this.electronService.ipcRenderer.invoke('setContent', content);
  }
}
