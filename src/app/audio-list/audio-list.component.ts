import { Component, ElementRef, ViewChild } from '@angular/core';

interface AudioRecord {
  id: number;
  name: string;
  file: string;
}

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css'],
})
export class AudioListComponent {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  audioRecords: AudioRecord[] = [
    {
      id: 1,
      name: 'Sound 1',
      file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 2,
      name: 'Sound 2',
      file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 3,
      name: 'Sound 3',
      file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    {
      id: 4,
      name: 'Sound 4',
      file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    },
  ];

  selectedRecord: AudioRecord | null = null;

  selectAudio(record: AudioRecord) {
    if (this.selectedRecord != record) {
      this.selectedRecord = record;
      this.audioPlayer?.nativeElement.load();
    }
  }
}
