const fs = require("fs");

console.log("File Manager Started");

fs.writeFile("test.txt", "Hello Node.js", (err) => {

    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File created");

    fs.readFile("test.txt", "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File content:", data);

        fs.appendFile("test.txt", "\nFile updated", (err) => {

            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File updated");

            fs.unlink("test.txt", (err) => {

                if (err) {
                    console.log("Error deleting file");
                    return;
                }

                console.log("File deleted");
            });
        });
    });
});