# stevevanhoyweghen.github.io

Steve Van Hoyweghen portfolio on GitHub.

Most content is generated with a generator I wrote.
The exif and itpc data from the pictures are used to generate the site.

Some background

I have established a complete workflow covering: Lightroom/Darktable -> exif/itpc cleanup -> thumbnail generation -> page generation,
on a Linux computer making use of Python, Jinja2, VIPS, and exiftool. Since all these tools are available on Windows and Mac as well,
porting the workflow to another OS will be easy.