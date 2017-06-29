$("#paper").ready(function () {
    let canvas = $("#paper").get(0);

    $(function () {
        $("#button").click(function () {
            let code = $("#actualCode").val();
            let parser = new Parser(code, canvas);
            parser.runAll();
        });
        $("#actualCode").keypress(function (e) {
            if(e.keyCode==13){
                e.preventDefault();
                let code = $("#actualCode").val();
                let parser = new Parser(code, canvas);
                parser.runAll();
            }
        })
    });
});
