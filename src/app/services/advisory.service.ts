import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { SupabaseClient, createClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class AdvisoryService {
  private _supabaseClient: SupabaseClient;

  constructor(
  ) {
    this._supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }
}
