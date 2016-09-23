  function make_array(name, location){
    // example on how to call this function
    // arrayA = make_array("arrayA","/img/img_A.txt");


    var name;
    var WordFile = new XMLHttpRequest();
        WordFile.open("GET", location, false);
        WordFile.onreadystatechange =
            function () {
            if(WordFile.readyState === 4)
                {
                    if(WordFile.status === 200 || WordFile.status == 0)
                        {
                            name = WordFile.responseText.split("\n");
                        }
                }
        };
        WordFile.send(null);
        return name;
    }