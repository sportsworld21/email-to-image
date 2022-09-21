import React, {useState, useEffect} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import * as htmlToImage from 'html-to-image';
import { MailSlurp } from "mailslurp-client";

import './index.scss';

const EmailConverterPage = () => {

    const code = `<html>
    <head>
       <title>
          Check this out
       </title>
       <!--[if !mso]><!-->
       <meta content="IE=edge" http-equiv="X-UA-Compatible">
       <!--<![endif]-->
       <meta content="width=device-width,initial-scale=1" name="viewport">
       <!--[if mso]>
       <noscript>
          <xml>
             <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
             </o:OfficeDocumentSettings>
          </xml>
       </noscript>
       <![endif]--><!--[if lte mso 11]>
       <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
       </style>
       <![endif]--><!--[if !mso]><!-->
       <!--<![endif]-->
       <style>@import url("https://fonts.googleapis.com/css?family=Lato:300,400,500,700");
          @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
          @import url(https://fonts.googleapis.com/css?family=Varela+Round);
          @import url(https://fonts.googleapis.com/css?family=Poppins);
          #outlook a {
          padding: 0
          }
          body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%
          }
          table, td {
          border-collapse: collapse;
          mso-table-lspace: 0;
          mso-table-rspace: 0
          }
          img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic
          }
          p {
          display: block;
          margin: 13px 0
          }
          @media only screen and (min-width: 480px) {
          .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%
          }
          .mj-column-per-33-333333333333336 {
          width: 33.333333% !important;
          max-width: 33.333333%
          }
          }
          .moz-text-html .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%
          }
          .moz-text-html .mj-column-per-33-333333333333336 {
          width: 33.333333% !important;
          max-width: 33.333333%
          }
          [owa] .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%
          }
          [owa] .mj-column-per-33-333333333333336 {
          width: 33.333333% !important;
          max-width: 33.333333%
          }
          @media only screen and (max-width: 480px) {
          table.mj-full-width-mobile {
          width: 100% !important
          }
          td.mj-full-width-mobile {
          width: auto !important
          }
          }
       </style>
    </head>
    <body>
       <div style="background-color:#ffffff;">
          <!--[if mso | IE]>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:top;width:600px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                             <tbody>
                                                                <tr>
                                                                   <td style="width:263px;">
                                                                      <a href="https://brainable.com/workout" target="_blank"> <img alt="Brainable" height="auto" src="https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7h0/y73w.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="263"></a>
                                                                   </td>
                                                                </tr>
                                                             </tbody>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1f2d44" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div style="background:#1f2d44;background-color:#1f2d44;margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1f2d44;background-color:#1f2d44;width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:top;width:600px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                             <tbody>
                                                                <tr>
                                                                   <td style="width:594px;">
                                                                      <a href="https://brainable.com/workout" target="_blank"> <img alt="Memory Game" height="auto" src="https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7kp/y7uw.png" style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="594"></a>
                                                                   </td>
                                                                </tr>
                                                             </tbody>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#f4f4f4" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
                      <v:fill origin="0, -0.5" position="0, -0.5" src="https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7h0/y73t.png" color="#f4f4f4" type="frame" size="100%,100%" />
                      <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                         <![endif]-->
                         <div class="eic" style="background:#f4f4f4 url('https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7h0/y73t.png') center top / 100% 100% no-repeat;background-position:center top;background-repeat:no-repeat;background-size:100% 100%;margin:0px auto;max-width:600px;">
                            <div style="line-height:0;font-size:0;">
                               <table align="center" background="https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7h0/y73t.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4 url('https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7h0/y73t.png') center top / 100% 100% no-repeat;background-position:center top;background-repeat:no-repeat;background-size:100% 100%;width:100%;">
                                  <tbody>
                                     <tr>
                                        <td style="direction:ltr;font-size:0px;padding:20px 16px 20px 16px;padding-left:16px;padding-right:16px;text-align:center;">
                                           <!--[if mso | IE]>
                                           <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                 <td class="" style="vertical-align:top;width:568px;" >
                                                    <![endif]-->
                                                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                             <tr>
                                                                <td align="left" style="font-size:0px;padding:8px 16px 8px 16px;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px;word-break:break-word;">
                                                                   <div style="font-family:Arial, sans-serif;font-size:36px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                                      <h1 class="text-build-content" data-testid="zg1LWqJYFb" style="line-height:50px;text-align:center;; margin-top: 10px; margin-bottom: 10px; font-weight: normal;">
                                                                         <span style="color:#1F2D44;font-family:Varela Round;font-size:36px;"><b>Make your brain training a habit!</b></span>
                                                                      </h1>
                                                                   </div>
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td align="left" style="font-size:0px;padding:0px 16px 8px 16px;padding-top:0px;padding-right:16px;padding-bottom:8px;padding-left:16px;word-break:break-word;">
                                                                   <div style="font-family:Arial, sans-serif;font-size:18px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                                      <p class="text-build-content" data-testid="RTRpXdw9Zx" style="line-height: 32px; text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">
                                                                         <span style="color:#55575d;font-family:Poppins;font-size:18px;">According to researchers at Duke University, habits account for about 40% of our behaviors on any given day. </span>
                                                                      </p>
                                                                   </div>
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td align="center" style="font-size:0px;padding:24px 24px 24px 24px;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px;word-break:break-word;" vertical-align="middle">
                                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                                      <tbody>
                                                                         <tr>
                                                                            <td align="center" bgcolor="#f6813f" role="presentation" style="border:none;border-radius:40px;cursor:auto;mso-padding-alt:18px 25px 18px 25px;background:#f6813f;" valign="middle">
                                                                               <a href="https://brainable.com/workout" style="display:inline-block;background:#f6813f;color:#ffffff;font-family:Arial, sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:18px 25px 18px 25px;mso-padding-alt:0px;border-radius:40px;" target="_blank"><span style="font-family:Lato;font-size:18px;letter-spacing:2px;">START TRAINING</span></a>
                                                                            </td>
                                                                         </tr>
                                                                      </tbody>
                                                                   </table>
                                                                </td>
                                                             </tr>
                                                          </tbody>
                                                       </table>
                                                    </div>
                                                    <!--[if mso | IE]>
                                                 </td>
                                              </tr>
                                           </table>
                                           <![endif]-->
                                        </td>
                                     </tr>
                                  </tbody>
                               </table>
                            </div>
                         </div>
                         <!--[if mso | IE]>
                      </v:textbox>
                   </v:rect>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div class="eic" style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:20px 16px 20px 16px;padding-left:16px;padding-right:16px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:top;width:568px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td style="font-size:0px;word-break:break-word;">
                                                          <div style="height:24px;line-height:24px;">
                                                          </div>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="left" style="font-size:0px;padding:8px 16px 8px 16px;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px;word-break:break-word;">
                                                          <div style="font-family:Arial, sans-serif;font-size:32px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                             <h2 class="text-build-content" data-testid="uRHOwGGKX" style="line-height:40px;text-align:center;; margin-top: 10px; margin-bottom: 10px; font-weight: normal;">
                                                                <span style="color:#1F2D44;font-family:Varela Round;font-size:32px;"><b>Left Brain VS. Right Brain</b></span>
                                                             </h2>
                                                          </div>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="left" style="font-size:0px;padding:0px 16px 8px 16px;padding-top:0px;padding-right:16px;padding-bottom:8px;padding-left:16px;word-break:break-word;">
                                                          <div style="font-family:Arial, sans-serif;font-size:18px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                             <p class="text-build-content" data-testid="Sasa_ijz75X" style="line-height: 32px; text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">
                                                                <span style="color:#55575d;font-family:Poppins;font-size:18px;">The left side of your brain is logical and more linear, while the right side of your brain is creative and intuitive. Our games combine the two allowing you to get the brain training you need in one quick, effective, and fun daily game!</span>
                                                             </p>
                                                          </div>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" style="font-size:0px;padding:24px 40px 24px 40px;padding-top:24px;padding-right:40px;padding-bottom:24px;padding-left:40px;word-break:break-word;" vertical-align="middle">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                             <tbody>
                                                                <tr>
                                                                   <td align="center" bgcolor="#f6813f" role="presentation" style="border:none;border-radius:40px;cursor:auto;mso-padding-alt:18px 25px 18px 25px;background:#f6813f;" valign="middle">
                                                                      <a href="https://brainable.com/workout" style="display:inline-block;background:#f6813f;color:#ffffff;font-family:Arial, sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:18px 25px 18px 25px;mso-padding-alt:0px;border-radius:40px;" target="_blank"><span style="font-family:Lato;font-size:18px;letter-spacing:2px;">START YOUR WORKOUT</span></a>
                                                                   </td>
                                                                </tr>
                                                             </tbody>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td style="font-size:0px;word-break:break-word;">
                                                          <div style="height:56px;line-height:56px;">
                                                          </div>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div class="eic" style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:top;width:600px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="font-size:0px;padding:8px 25px 8px 25px;padding-top:8px;padding-right:25px;padding-bottom:8px;padding-left:25px;word-break:break-word;">
                                                          <p style="border-top:solid 1px #dee8f2;font-size:1px;margin:0px auto;width:100%;"></p>
                                                          <!--[if mso | IE]>
                                                          <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #dee8f2;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" >
                                                             <tr>
                                                                <td style="height:0;line-height:0;"> &nbsp;
                                                                </td>
                                                             </tr>
                                                          </table>
                                                          <![endif]-->
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:8px 0px 8px 0px;padding-bottom:8px;padding-left:0px;padding-right:0px;padding-top:8px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:middle;width:200px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="left" style="font-size:0px;padding:10px 24px 10px 24px;padding-right:24px;padding-left:24px;word-break:break-word;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                             <tbody>
                                                                <tr>
                                                                   <td style="width:150px;">
                                                                      <a href="https://brainable.com/workout" target="_blank"> <img alt="Brainable" height="auto" src="https://0x2wg.mjt.lu/tplimg/0x2wg/b/sq7kp/9og3.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150"></a>
                                                                   </td>
                                                                </tr>
                                                             </tbody>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                        <td class="" style="vertical-align:middle;width:200px;" >
                                           <![endif]-->
                                           <div class="eic mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                                                          <div style="font-family:Arial, sans-serif;font-size:14px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                             <p class="text-build-content" data-testid="RJtBau70P" style="line-height: 20px; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">
                                                                <span style="color:#55575d;font-family:Arial;font-size:14px;">Inbox Bird, LLC, 18 W 18th St, New York, NY, 10011</span>
                                                             </p>
                                                          </div>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                        <td class="" style="vertical-align:middle;width:200px;" >
                                           <![endif]-->
                                           <div class="eic mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="left" style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                                                          <div style="font-family:Arial, sans-serif;font-size:14px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                                             <p class="text-build-content" data-testid="Oy6LSW5gLPsB" style="line-height: 20px; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">
                                                                <span style="color:#55575d;font-family:Roboto;font-size:14px;">{% manage_preferences %} for {{ email }}, or</span><a class="link-build-content" href="[%5BUNSUB_LINK_EN%5D]" style="color:inherit;; text-decoration: none;" target="_blank"><span style="color:#55575d;font-family:Roboto;font-size:14px;"> {% unsubscribe %}</span></a><span style="color:#55575d;font-family:Roboto;font-size:14px;">.</span>
                                                             </p>
                                                          </div>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" >
             <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                   <![endif]-->
                   <div class="eic" style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                         <tbody>
                            <tr>
                               <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                                  <!--[if mso | IE]>
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                     <tr>
                                        <td class="" style="vertical-align:top;width:600px;" >
                                           <![endif]-->
                                           <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="font-size:0px;padding:8px 25px 8px 25px;padding-top:8px;padding-right:25px;padding-bottom:8px;padding-left:25px;word-break:break-word;">
                                                          <p style="border-top:solid 1px #dee8f2;font-size:1px;margin:0px auto;width:100%;"></p>
                                                          <!--[if mso | IE]>
                                                          <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #dee8f2;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" >
                                                             <tr>
                                                                <td style="height:0;line-height:0;"> &nbsp;
                                                                </td>
                                                             </tr>
                                                          </table>
                                                          <![endif]-->
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td style="font-size:0px;word-break:break-word;">
                                                          <div style="height:60px;line-height:60px;">
                                                          </div>
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </div>
                                           <!--[if mso | IE]>
                                        </td>
                                     </tr>
                                  </table>
                                  <![endif]-->
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   <!--[if mso | IE]>
                </td>
             </tr>
          </table>
          <![endif]-->
       </div>
    </body>
 </html>`;

    const [htmlCode, setHtmlCode] = useState(code);
    const [toEmail, setToEmail] = useState('');

    const convertHtmltoImage = () => {
        let nodes = document.getElementById("html_preview").contentWindow.document.getElementsByClassName("eic");
        const node_length = nodes.length;
        let convert_count = 0;
        for(let el of nodes) {
            htmlToImage.toPng(el).then((dataUrl) => {
                var img = new Image();
                img.src = dataUrl;
                el.innerHTML = '';
                el.appendChild(img);
                convert_count++;
                if(convert_count >= node_length) {
                  alert("Completed to convert!");
                  setHtmlCode(document.getElementById("html_preview").contentDocument.documentElement.outerHTML);
                }
            })            
        }
    }

    const sendEmail = async () => {
      const mailslurp = new MailSlurp({ apiKey: 'a77d81ee0f5eed37565f98746bd1f475590f7309e9b54bf2ae0438cd44e7204d' });
      const emailSubject = 'Test Email';
      const emailBody = htmlCode;
      const options = {
         to: toEmail,
         subject: emailSubject,
         body: emailBody,
      };
      const sent = await mailslurp.sendEmail("9dc59d89-6d9d-4fc1-b7c9-accd0f0be568", options);
      console.log(sent);
    }

    return (
        <div className='page-wrapper'>
            <div className='main-wrapper'>
                <h2>Email to Image Converter</h2>
                <div className='tool-bar'>
                    <div>
                        <button onClick={(e) => {
                            convertHtmltoImage();
                        }}>Convert</button>

                    </div>
                    <div>
                        <input type='email' placeholder='john@example.com' value={toEmail} onChange={(e) => {
                           setToEmail(e.target.value);
                        }} />
                        <button className='' onClick={(e) => {
                            sendEmail();
                        }}>Send</button>
                    </div>
                </div>
                <div className='email-converter'>
                    <div className='email-template'>
                        <CodeMirror width='100%' height='500px' value={htmlCode} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
                    </div>
                    <div className='preview'>
                        <div className='html-preview'>
                            <iframe id='html_preview' srcDoc={htmlCode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailConverterPage;