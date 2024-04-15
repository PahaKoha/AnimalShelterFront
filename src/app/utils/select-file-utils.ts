export class SelectFileUtils{
  public static onFileSelected(event: any) {
    this.file = event.target.files[0];
    const file: File = event.target.files[0];
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}