export interface CSVVodafoneDevice {
  selected: boolean;
  imei?: string | null;
  statoImei?: string | null;
  marcaDispositivo?: string | null;
  modelloDispositivo?: string | null;
  descrizioneDispositivo?: string | null;
  situazioneDispositivi?: string | null;
  dataPrimaAttivazioneEmei?: string | null;
  dataDisattivazioneEmei?: string | null;
  sostitutivo?: string | null;
}

export type ParseResult = {
  total: number;
  items: CSVVodafoneDevice[];
};

export interface Pagination {
  page: number;
  itemsPerPage: number;
  orderBy?: keyof CSVVodafoneDevice;
  orderByDescending: boolean;
  selectedFilters: { [key: string]: MenuOptionValue[] };
  searchKey?: string;
}

export type MenuOptionValue = string | boolean | null;

export type VodafoneDeviceHeader = {
  key: keyof CSVVodafoneDevice;
  csvKey: string;
  filterable?: boolean;
  sortable?: boolean;
  parse?: (value?: string | null) => string | undefined;
};
