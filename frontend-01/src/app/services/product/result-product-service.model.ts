export class ResultProductService{
  public fieldCount: number;
  public affectedRows: number;
  public insertId: number;
  public info: string;
  public serverStatus: number;
  public warningStatus: number;

  public constructor( _fieldCount?: number | null, _affectedRows?: number | null, _insertId?: number | null, _info?: string | null, _serverStatus?: number | null, _warningStatus?: number | null ) {
    this.fieldCount = _fieldCount;
    this.affectedRows = _affectedRows;
    this.insertId = _insertId;
    this.info = _info;
    this.serverStatus = _serverStatus;
    this.warningStatus = _warningStatus;
  }

}
