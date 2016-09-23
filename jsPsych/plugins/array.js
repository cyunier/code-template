


function Array_images(){
	var img_A_Array;
    var WordFile = new XMLHttpRequest();
    WordFile.open("GET", "img_A.txt", false);
    WordFile.onreadystatechange =
        function () {
        if(WordFile.readyState === 4)
            {
                if(WordFile.status === 200 || WordFile.status == 0)
                    {
                        img_A_Array = WordFile.responseText.split("\n");
                    }
            }
    };
    WordFile.send(null);

    var img_B_Array;
    var WordFile = new XMLHttpRequest();
        WordFile.open("GET", "img_B.txt", false);
        WordFile.onreadystatechange =
            function () {
            if(WordFile.readyState === 4)
                {
                    if(WordFile.status === 200 || WordFile.status == 0)
                        {
                            img_A_Array = WordFile.responseText.split("\n");
                        }
                }
        };
        WordFile.send(null);
}


console.log(img_A_Array);