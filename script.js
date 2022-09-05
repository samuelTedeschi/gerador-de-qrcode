function gerarQrCode (){
    let imputTextArea = document.querySelector('textarea').value;
    let googleApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl='
    let conteudoApi = googleApi + encodeURIComponent(imputTextArea);
    document.querySelector('#qrCodeImagem').src = conteudoApi;
}