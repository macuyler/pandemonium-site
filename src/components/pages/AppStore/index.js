import React from 'react';
import AppStoreStyles from './styles';
import pageInject from '../inject';

const AppStorePage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <h1>The App Store</h1>
        <h2>and why we aren&apos;t on it</h2>
        <h3>Introduction</h3>
        <p>
          Pandemonium 2020 has been a fun side project that I have been working
          on since early April 2020. I came up with the idea while sitting on
          the couch ammused by my family members&apos; addiction to a mobile game
          called{' '}
          <a
            href="https://bestfiends.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Best Fiends</em>
          </a>
          . It is a fairly simple game from the perspective of gameplay, but it
          has a cool theme surrounding the gameplay which ultimately creates a
          very addicting experience. With the most notable current event of my
          life thus far, the COVID-19 pandemic, playing out before me. I thought
          it might be fun to make a simple game with a fun theme based on COVID.
          This is what eventually evolved into Pandemonium 2020.
        </p>
        <h3>Initial Conflict</h3>
        <p>
          After working on the game for a couple months, I was ready to launch
          the app on the Google Play Store and the Apple App Store. I got
          everything setup, archived the app, and uploaded it. After a couple
          days the app was approved an put on both app stores! The next thing I
          did was send a link to a few close friends and family memebers to get
          their feedback on the game. The one common complaint that I got from
          all testers was that there should be a tutorial explaining how to
          play. Adding the tutorial was simple enough, I just added a page
          before you load a level, and threw some home made GIFs on there. But
          then I ran into an issue. The app was rejected by the App Store Review
          team.
        </p>
        <div className={classes.reviews}>
          <span>Oct 16, 2020 at 6:57 PM</span>
          <span>From Apple</span>
          <h4>Guideline 1.1 - Safety - Objectionable Content</h4>
          <p>
            We found that your app includes content or concepts that some users
            may find upsetting, offensive, or otherwise objectionable.
          </p>
          <p>
            Specifically, your entertainment or gaming app inappropriately
            refers to the COVID-19 pandemic in its concept or theme.
            Entertainment or gaming apps that directly or indirectly reference
            the COVID-19 pandemic in any way are not appropriate for the App
            Store.
          </p>
          <strong>
            <p>Next Steps</p>
          </strong>
          <p>
            While your app’s current content or concept is not appropriate for
            the App Store, we would welcome a new app from you in alignment with
            our{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>{' '}
            that is not focused on or related to the COVID-19 pandemic.
          </p>
          <strong>
            <p>Resources</p>
          </strong>
          <p>
            For additional information regarding Apple’s response to the
            COVID-19 pandemic, please refer to the{' '}
            <a
              href="https://developer.apple.com/news/?id=03142020a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ensuring the Credibility of Health &amp; Safety Information
            </a>{' '}
            update on the Apple Developer website.
          </p>
          <p className={classes.error}>
            These attachments may display potentially objectionable content,
            such as nudity, pornography, and profanity.
          </p>
        </div>
        <p>
          My initial impressions were, &quot;That&apos;s a dumb rule, but fair enough.&quot;
          The tutorial text was definitely indirectly referencing COVID-19, so
          maybe if I just change the wording in the tutorial it will be fine!
        </p>
        <div className={classes.reviews}>
          <span>Oct 17, 2020 at 8:33 AM</span>
          <span>From macuyler.d@gmail.com (Macuyler Dunn)</span>
          <p>
            If we were to change the wording in the game would we be able to get
            you to accept it? If so, would you mind pointing out specific parts
            of the tutorial content wording that you find to be in violation of
            the guideline. Thank You!
          </p>
        </div>
        <div className={classes.reviews}>
          <span>Oct 17, 2020 at 1:39 PM</span>
          <span>From Apple</span>
          <p>
            Hello, We are not able to provide feedback on app concepts or
            features, but we recommend evaluating your suggestions against the{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>
            , as well as the{' '}
            <a
              href="https://developer.apple.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS Developer Program License Agreement (PLA)
            </a>
            , and the{' '}
            <a
              href="https://developer.apple.com/ios/human-interface-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS Human Interface Guidelines
            </a>
            .
          </p>
          <p>
            Additionally, if you are considering implementing any of the
            following functionality, we recommend reviewing all associated
            reference material and other resources available on Apple Developer
            for any additional requirements.
          </p>
          <ul>
            <li>
              {' '}
              -{' '}
              <a
                href="https://developer.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Developer
              </a>
            </li>
            <li>
              {' '}
              -{' '}
              <a
                href="http://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Copyright and Trademark Guidelines
              </a>
            </li>
            <li>
              {' '}
              -{' '}
              <a
                href="https://developer.apple.com/library/prerelease/content/documentation/NetworkingInternet/Conceptual/GameKit_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008304"
                target="_blank"
                rel="noopener noreferrer"
              >
                Game Center
              </a>
            </li>
            <li>
              {' '}
              -{' '}
              <a
                href="https://developer.apple.com/icloud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                iCloud
              </a>
            </li>
            <li>
              {' '}
              -{' '}
              <a
                href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                In-App Purchase
              </a>
            </li>
          </ul>
          <p>
            You may also choose to post a question in the{' '}
            <a href="https://forums.developer.apple.com/">
              Apple Developer Forums
            </a>
            .
          </p>
          <p>Best regards,</p>
          <p>App Store Review</p>
          <p className={classes.error}>
            These attachments may display potentially objectionable content,
            such as nudity, pornography, and profanity.
          </p>
        </div>
        <p>
          So I started working on a <em>censored</em> version of the app for
          iOS, hoping that the app would be approved again soon.
        </p>
        <h3>Second Issue</h3>
        <div className={classes.reviews}>
          <span>Oct 20, 2020 at 6:07 PM</span>
          <span>From Apple</span>
          <ol>
            <li>1.0 - General</li>
          </ol>
          <hr />
          <strong>
            <p>
              Please review this information carefully as it impacts your app’s
              availability on the App Store and requires your immediate action.
            </p>
          </strong>
          <p>Hello,</p>
          <p>
            We are writing to let you know about new information regarding your
            app, Pandemonium 2020.
          </p>
          <p>
            Upon re-evaluation, we found that your app is not in compliance with
            the{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>
            . Specifically, we found your app is in violation of the following:
          </p>
          <h5>Guideline 1.1 - Safety - Objectionable Content</h5>
          <p>
            We found that your app includes content or concepts that some users
            may find upsetting, offensive, or otherwise objectionable.
          </p>
          <p>
            Specifically, your entertainment or gaming app inappropriately
            refers to the COVID-19 pandemic in its concept or theme.
            Entertainment or gaming apps that directly or indirectly reference
            the COVID-19 pandemic in any way are not appropriate for the App
            Store.
          </p>
          <p>
            To ensure there is no interruption of the availability of your app
            on the App Store, please submit an update within 14 days of the date
            of this message. If we do not receive an update compliant with the
            App Store Review Guidelines within 14 days, your app will be removed
            from sale. Please note, if your app is found to be out of compliance
            for any reason and rejected after the time period provided has
            elapsed, your app will be removed from sale until a compliant update
            is submitted, approved and released to the App Store.
          </p>
          <p>
            In order to return your app to the App Store, you will need to
            submit an updated version for review which addresses these issues.
          </p>
        </div>
        <p>
          I wake up to this message the morning after they sent it, and I can&apos;t
          beleive what I am seeing. The app which they approved for the App
          Store, is now being taken down from the App Store because a future
          update to the app was rejected? The only reason I can think that this
          is happening is because the tutorial update gave the existing game
          context that might put it in violation of the guidelines. But that is
          a totally unfair way to judge the app. It was percieved as totally
          fine before that context was provided, and if the end goal is to keep
          users safe, then not allowing me to provided the context of the game
          should be enough to make the game within the guidelines. After all,
          the guideline specifically says an app is in violation when it{' '}
          <em>
            &quot;... inappropriately refers to the COVID-19 pandemic in its concept
            or theme.&quot;
          </em>{' '}
          Not when it is created with the COVID-19 pandemic in mind.
        </p>
        <p>
          So the first thing I did that morning was submit an appeal.
          Unfortunately I didn&apos;t think to save the contents of the appeal, and I
          am not aware of any way to go back and review what I said, but it was
          explainging a similar thought process to what is written in the
          previous paragraph.
        </p>
        <div className={classes.reviews}>
          <span>Oct 22, 2020 at 6:55 PM</span>
          <span>From Apple</span>
          <ol>
            <li>1 Safety: Objectionable Content</li>
          </ol>
          <hr />
          <p>Hello,</p>
          <p>
            We are writing to let you know the results of your appeal for your
            app, Pandemonium 2020.
          </p>
          <p>
            The App Review Board evaluated your app and determined that the
            original rejection feedback is valid. Your app does not comply with:
          </p>
          <h4>Safety 1.1</h4>
          <p>
            We found that your app includes content or concepts that some users
            may find upsetting, offensive, or otherwise objectionable.
          </p>
          <p>
            Specifically, your entertainment or gaming app inappropriately
            refers to the COVID-19 pandemic in its concept or theme.
            Entertainment or gaming apps that directly or indirectly reference
            the COVID-19 pandemic in any way are not appropriate for the App
            Store.
          </p>
          <p>
            While your app’s current content or concept is not appropriate for
            the App Store, we would welcome a new app from you in alignment with
            our{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>{' '}
            that is not focused on or related to the COVID-19 pandemic.
          </p>
          <p>
            For additional information regarding Apple’s response to the
            COVID-19 pandemic, please refer to the{' '}
            <a
              href="https://developer.apple.com/news/?id=03142020a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ensuring the Credibility of Health &amp; Safety Information
            </a>{' '}
            update on the Apple Developer website.
          </p>
          <p>
            We hope you will consider making the necessary changes to be in
            compliance with the App Store Review Guidelines and will resubmit
            your revised binary.
          </p>
          <p>
            Best regards,
            <br />
            Chris <br />
            App Review Board
          </p>
          <p className={classes.error}>
            These attachments may display potentially objectionable content,
            such as nudity, pornography, and profanity.
          </p>
          <p>
            <a
              href="https://iosapps-ssl.itunes.apple.com/itunes-assets/Purple124/v4/35/53/4f/35534f05-c50a-aae8-48df-70bdf599d0ed/attachment-80305419071710922Screenshot-1022-175528.png?accessKey=1605991572_406726905478363970_JXYB7BRn1RhB0WfA08SRODvUsLX9qC7RylTnPxGaZicALElWtenYuI5yKdnZxTDtJejogNvWJttRx8vMtQryaT7HS%2BCp0FRPJpgKPLtVAE1Y9N%2BT9Oo8ZOlLkI1hZoS%2BFTVnAgE4ofEMhyt6nwqdZczxGqI9KHrc7hnUM1bGwb%2BRZ4hcAux%2BePswPVH2bU3TLTHGvYxjUCbF57HfXaVKFA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.fileIcon}
            >
              Screenshot-1022-175528.png
            </a>
          </p>
        </div>
        <p>
          What a releif, they finally said what exactly they have an issue with,
          and even included a screenshot! The issue is that we use the word{' '}
          <em>&quot;Hospital&quot;</em> in the tutorial. So now I can just go in and
          change that and then everything will be fine, right?
        </p>
        <p>
          <strong>Wrong!</strong>
        </p>
        <div className={classes.reviews}>
          <span>Oct 23, 2020 at 11:50 AM</span>
          <span>From Apple</span>
          <ol>
            <li>1 Safety: Objectionable Content</li>
          </ol>
          <hr />
          <h4>Guideline 1.1 - Safety - Objectionable Content</h4>
          <p>
            We found that your app includes content or concepts that some users
            may find upsetting, offensive, or otherwise objectionable.
          </p>
          <p>
            Specifically, your app’s metadata or binary include inappropriate
            references to the COVID-19 pandemic.
          </p>
          <strong>
            <p>Next Steps</p>
          </strong>
          <p>
            While your app’s current content or concept is not appropriate for
            the App Store, we would welcome a new app from you in alignment with
            our{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>{' '}
            that is not focused on or related to the COVID-19 pandemic.
          </p>
          <strong>
            <p>Resources</p>
          </strong>
          <p>
            For additional information regarding Apple’s response to the
            COVID-19 pandemic, please refer to the{' '}
            <a
              href="https://developer.apple.com/news/?id=03142020a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ensuring the Credibility of Health &amp; Safety Information
            </a>{' '}
            update on the Apple Developer website.
          </p>
          <p>Please see attached screenshot for details.</p>
          <p className={classes.error}>
            These attachments may display potentially objectionable content,
            such as nudity, pornography, and profanity.
          </p>
          <p>
            <a
              href="https://iosapps-ssl.itunes.apple.com/itunes-assets/Purple124/v4/19/fd/f2/19fdf213-53cd-978a-afb5-88313321ac4f/attachment.336dca8262af9c7bc9d66c53788e3ab46d64f38a.png?accessKey=1605991572_8662671586119312510_HoUVn6BWlghzOZue1%2B6op1iXwNty%2FWnn%2B63Yi0tkYHXgOzfWtIRLdxf89iJ7MRp7vLByg7eqikZKbIVzHMVeN7uWEvp7qWfOFsnhC8Nzr0PhEb4eLlgBLhcqY62myJTOqDGQ7jFMIOkVIcW%2FAYl5MgVGwa5sVUeOpWiErUfvpK6giO5nnLYF6KKmU7840hU5IRYYPrFYHHmoyuhvhXx%2FAg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.fileIcon}
            >
              336dca8262af9c7bc9d66c53788e3ab46d64f38a.png
            </a>
          </p>
        </div>
        <p>
          Apparently they now have a problem with some of the in game characters
          wearing a mask. I have two major issues with this, the first being
          that masks are not specific to COVID-19. Will Apple just be banning
          all apps containing content with masks? Second, the graphics in
          Pandemonium 2020 are very minimal, and as such you might not even know
          that the white square on their faces is a mask. After all, the
          original game that was approved had those same masks, and before I
          told Apple they were masks Apple had no problem with them.
        </p>
        <p>
          As painful as it was to redo the entire theme of the game, I was not
          yet ready to give up on the entirety of the iOS market. So I made the
          decision to redo the mask characters as ghosts on iOS. This took a lot
          longer than my previous changes, but I was sure that this would get
          the app back on the Apple App Store.
        </p>
        <div className={classes.reviews}>
          <span>Oct 29, 2020 at 8:21 PM</span>
          <span>From Apple</span>
          <ol>
            <li>1 Safety: Objectionable Content</li>
          </ol>
          <hr />
          <h4>Guideline 1.1 - Safety - Objectionable Content</h4>
          <p>
            We found that your app includes content or concepts that some users
            may find upsetting, offensive, or otherwise objectionable.
          </p>
          <p>
            Specifically, your entertainment or gaming app inappropriately
            refers to the COVID-19 pandemic in its concept or theme.
            Entertainment or gaming apps that directly or indirectly reference
            the COVID-19 pandemic in any way are not appropriate for the App
            Store.
          </p>
          <strong>
            <p>Next Steps</p>
          </strong>
          <p>
            While your app’s current content or concept is not appropriate for
            the App Store, we would welcome a new app from you in alignment with
            our{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>{' '}
            that is not focused on or related to the COVID-19 pandemic.
          </p>
          <strong>
            <p>Resources</p>
          </strong>
          <p>
            For additional information regarding Apple’s response to the
            COVID-19 pandemic, please refer to the{' '}
            <a
              href="https://developer.apple.com/news/?id=03142020a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ensuring the Credibility of Health &amp; Safety Information
            </a>{' '}
            update on the Apple Developer website.
          </p>
          <p className={classes.error}>
            These attachments may display potentially objectionable content,
            such as nudity, pornography, and profanity.
          </p>
        </div>
        <p>
          After all that work, completely degrading the purpose and experience
          of the game, they still aren&apos;t happy. At this point, I am very upset
          and disapointed. I feel that I have bent over backwards for Apple, and
          they still have a gripe with my game. So I submitted one final appeal.
        </p>
        <div className={classes.reviews}>
          <span>Oct 30, 2020 at 10:35 AM</span>
          <span>From macuyler.d@gmail.com (Macuyler Dunn)</span>
          <h5>App Rejection Appeal</h5>
          <p>
            I cannot think of any reason why someone would come to the
            conclusion that Pandemonium 2020 is in any way related to the
            COVID-19 pandemic. The latest review rejection doesn&apos;t contain any
            specific information as to why Pandemonium 2020 is perceived to be
            related to the COVID-19 pandemic. I have removed all language, and
            graphics that could in any way be perceived as &quot;offensive&quot; as
            related to guideline on COVID-19. I feel that I have done everything
            Apple requires to make my application appropriate for the App Store.
            If I am missing something specific, then I am frustrated by the App
            Review Team&apos;s inability to tell me specifically what it is. It feels
            like I am fighting with the App Review Team instead of working with
            them. Apple has often said that they want to have a developer
            friendly ecosystem, and then they fail to so much as tell me
            specifically why my application is rejected by the App Review Team.
            In the 1.3.1 rejection, an attachment of the application logo was
            the only feedback I was given. In the 1.3.2 build I have changed the
            application logo, and any other appearances of similar imagery
            within the application. I am now at a point where I can genuinely
            think of no additional changes that can be made to the application
            to make it better fit the COVID-19 guideline. I would greatly
            appreciate any specific information as to what content within my
            application is in violation of the COVID-19 guideline. If Apple has
            no interest in ever letting this application reach the App Store
            then please let me know so I can stop wasting my time.
          </p>
        </div>
        <div className={classes.reviews}>
          <span>Nov 2, 2020 at 7:56 PM</span>
          <span>From Apple</span>
          <ol>
            <li>1 Safety: Objectionable Content</li>
          </ol>
          <hr />
          <p>Hello Macuyler,</p>
          <p>
            We are writing to let you know the appeal results for your app,
            Pandemonium 2020.
          </p>
          <p>
            The App Review Board evaluated your app and determined that the
            original rejection feedback is valid.
          </p>
          <p>Guideline 1.1 - Safety - Objectionable Content</p>
          <p>
            We still find that your gaming app inappropriately refers to the
            COVID-19 pandemic in its concept or theme. Entertainment or gaming
            apps that directly or indirectly reference the COVID-19 pandemic in
            any way are not appropriate for the App Store.
          </p>
          <p>
            We appreciate you revising the language, but even though you have
            removed any specific references to the pandemic, the concept remains
            the same.
          </p>
          <p>
            While your app’s current content or concept is not appropriate for
            the App Store, we would welcome a new app from you in alignment with
            our{' '}
            <a
              href="https://developer.apple.com/app-store/review/guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store Review Guidelines
            </a>{' '}
            that is not focused on or related to the COVID-19 pandemic.
          </p>
          <p>
            Best regards,
            <br />
            Ellie
            <br />
            App Review Board
          </p>
        </div>
        <div className={classes.reviews}>
          <span>Nov 3, 2020 at 6:11 AM</span>
          <span>From macuyler.d@gmail.com (Macuyler Dunn)</span>
          <p>
            I strongly disagree that the concept behind the game conveys to
            users that it is at all related to COVID-19, but I appreciate your
            time and consideration.
          </p>
          <p>
            Good Bye,
            <br />
            Macuyler Dunn
          </p>
        </div>
        <h3>Moving Forward</h3>
        <p>
          Overall this was a very frustrating experience. I appreciate the fact
          that the Apple App Store is a private software distrobution platform,
          and as such, has no obligation to put my app on there. But I do feel
          that their current system unfairly discriminates against certain apps.
          I think that had I never uploaded the tutorial specifically saying
          that the game was a parody of the COVID-19 pandeminc, they never to
          this day would have removed the app from the app store. I do think
          that shows they have biases in their app review process, and I would
          hope that they someday fix that.
        </p>
        <p>
          So what happened with Pandemonium? Well, looking back I probably
          should have known that I never would have gotten the app back on the
          App Store, which would have allowed me to skip to where we are now.
          Pandemonium 2020 was allowed to be on the Google Play store for years,
          but was eventually removed because we failed to update it for a while.
          Apple eventually cracked down on our Test Flight link, and killed it as well.
          So the only way to play Pandemonium 2020 nowadays is to download the
          source code and compile it locally.
        </p>
      </div>
    </div>
  );
};

export default pageInject(AppStoreStyles)(AppStorePage);
