"use client";

import { useRef } from 'react';
import BundledEditor from '@/components/BundledEditor';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';


export default function ResumeEditor() {
    var content = "";
    const editorRef = useRef<TinyMCEEditor | null>(null);

    const log = () => {
      if (editorRef.current) {
        // console.log(editorRef.current.getContent());
      }
    };

    return (
        <>
        <BundledEditor
          onInit={(_evt, editor) => {
            // editorRef.current = editor;
          } }
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: "75vh",
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
    'table', 'emoticons', 'help'
            ],
            // toolbar: 'undo redo | blocks | ' +
            //   'bold italic forecolor | alignleft aligncenter ' +
            //   'alignright alignjustify | bullist numlist outdent indent | ' +
            //   'removeformat | help',
            toolbar: 'newdocument restoredraft | preview | importword exportpdf exportword | print | deleteallconversations | undo redo | cut copy paste pastetext | selectall | searchreplace | code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments | image link media addcomment pageembed codesample inserttable | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime | bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat | spellchecker spellcheckerlanguage | a11ycheck code wordcount | inserttable | cell row column | advtablesort | tableprops deletetable',
              menu: {
                favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
              },
              // menubar: 'favs file edit view insert format tools table help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
          }} />
        
        </>
      );
}