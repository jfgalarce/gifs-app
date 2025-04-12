import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'history-page',
  imports: [GifListComponent],
  templateUrl: './history-page.component.html',
})
export default class HistoryPageComponent {
  gifService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );
  gifByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
