var templateSheet='<?xml version="1.0" ?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"><sheetData>{rows}</sheetData></worksheet>';export function toWorkBookRel(a,b){return'<Relationship Id="'+a.rId+'" Target="worksheets/sheet'+b+'.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>'}export function getWorkBookSheet(a){return'<sheet state="visible" name="'+a.name+'" sheetId="'+a.id+'" r:id="'+a.rId+'"/>'}export function getStyles(){return`<?xml version="1.0" encoding="utf-8"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
    <numFmts count="0"></numFmts>
    <fonts count="2" x14ac:knownFonts="1" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
    <font><sz val="10" /><color rgb="FF333333" /><name val="Calibri Body" /></font>
    <font><b/><sz val="10" /><name val="Calibri Body" /></font>
    </fonts>
    <fills count="2">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    </fills>
    <borders count="1"><border><left /><right /><top /><bottom /><diagonal /></border></borders>
    <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
    <cellXfs count="2">
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyAlignment="1">
      <alignment verticial="center" horizontal="center" />
    </xf>
    <xf numFmtId="undefined" fontId="0" fillId="undefined" borderId="undefined" xfId="0"  applyBorder="1"  applyFill="1"></xf>
    </cellXfs>
    <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
    </cellStyles><dxfs count="0"/></styleSheet>`}export function generateSheet(a){return templateSheet.replace('{rows}',generateRows(a.rows))}export function createWorkBookRel(){let a='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';return a+='<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>',a+'</Relationships>'}function cellNameH(a){let b=Math.floor(a/26)-1,c=-1<b?cellNameH(b):'';return c+'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(a%26)}function cellName(a,b){return cellNameH(a)+b}function formatNumber(a){return a.replace(/'/g,'').replace(/"/g,'')}function generateCell(a,b,c){let d;return d=0==c-1?'<c s="0" r="'+cellName(b,c)+'"':'<c s="1" r="'+cellName(b,c)+'"',isNaN(a)?d+' t="inlineStr" ><is><t>'+checkSpecialChars(a)+'</t></is></c>':d+'><v>'+formatNumber(a)+'</v></c>'}function checkSpecialChars(a){let b=/[&<>"']/g,c=RegExp(b.source);return'string'!=typeof a&&(a+=''),a&&c.test(a)?replaceSpecialChars(a):a}function replaceSpecialChars(a){let b=a;return b=b.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/\'/g,'&#39;'),b}function generateCells(a,b){let c=[];for(var d in a)c.push(generateCell(a[d],parseInt(d,10),b));return c.join('')}function generateRow(a,b){let c=b+1,d='<row r="'+c+'">';return d+=generateCells(a,c),d+'</row>'}function generateRows(a){let b=[];for(var c in a)b.push(generateRow(a[c],parseInt(c,10)));return b.join('')}